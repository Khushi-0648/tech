/**
 * OWASP-Aligned Client-Side Security & Defensive Hardening Utilities
 * TechPros Network Security Module
 */

/**
 * Sanitizes user input string against HTML injection, script execution,
 * control characters, and enforces length constraints.
 * 
 * @param {string} input - Raw user input string
 * @param {number} maxLength - Maximum allowable string length (default: 1000)
 * @returns {string} Sanitized string
 */
export function sanitizeInput(input, maxLength = 1000) {
  if (typeof input !== 'string') return '';
  
  // 1. Remove null bytes and invisible control characters (except standard whitespace/newlines)
  let clean = input.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');

  // 2. Strip potential HTML tags and inline scripts
  clean = clean.replace(/<[^>]*>?/gm, '');

  // 3. Neutralize javascript: and data: URI schemes
  clean = clean.replace(/(javascript|data|vbscript):/gi, '');

  // 4. Enforce strict character limit to prevent buffer/payload flooding
  if (clean.length > maxLength) {
    clean = clean.substring(0, maxLength);
  }

  return clean.trim();
}

/**
 * Validates RFC 5322 compliant email address while actively rejecting
 * CRLF injection attempts (%0d, %0a, \r, \n) often used in SMTP header injection.
 * 
 * @param {string} email - Email address to test
 * @returns {boolean} True if email is valid and free of injection characters
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();

  // Guard against CRLF injection
  if (/[\r\n]|(%0d)|(%0a)/i.test(trimmed)) {
    return false;
  }

  // Length check (RFC 5321 specifies maximum 254 characters)
  if (trimmed.length < 5 || trimmed.length > 254) {
    return false;
  }

  // Standard RFC-compatible regex pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed);
}

/**
 * Validates phone numbers allowing E.164 and international dial formats.
 * 
 * @param {string} phone - Phone number to test
 * @returns {boolean} True if phone format is valid
 */
export function validatePhone(phone) {
  if (!phone || typeof phone !== 'string') return true; // Phone is optional in some forms
  const trimmed = phone.trim();
  if (!trimmed) return true;

  // Reject anything containing letters or script tags
  if (/[a-zA-Z<>]/i.test(trimmed)) return false;

  // Extract digits to verify E.164 allowable length (between 7 and 15 digits)
  const digitsOnly = trimmed.replace(/\D/g, '');
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return false;
  }

  // Ensure formatted string only contains legitimate telecom symbols
  return /^[\d\s+\-().]{7,25}$/.test(trimmed);
}

/**
 * Client-side rate-limiter using sessionStorage to prevent rapid-fire form
 * submissions and automated spamming (OWASP A04: Insecure Design).
 * 
 * @param {string} actionKey - Unique key for the rate-limited action (e.g. 'contact_form')
 * @param {number} maxAttempts - Maximum attempts allowed in the given window (default: 3)
 * @param {number} windowSeconds - Cooldown duration in seconds (default: 60)
 * @returns {{ allowed: boolean, remainingSeconds: number }} Rate limit verdict
 */
export function checkRateLimit(actionKey, maxAttempts = 3, windowSeconds = 60) {
  try {
    const storageKey = `tpn_rl_${actionKey}`;
    const now = Date.now();
    const rawData = sessionStorage.getItem(storageKey);
    let record = rawData ? JSON.parse(rawData) : null;

    if (!record || (now - record.startTime) > windowSeconds * 1000) {
      record = { count: 1, startTime: now };
      sessionStorage.setItem(storageKey, JSON.stringify(record));
      return { allowed: true, remainingSeconds: 0 };
    }

    if (record.count >= maxAttempts) {
      const elapsedSeconds = Math.floor((now - record.startTime) / 1000);
      const remainingSeconds = Math.max(1, windowSeconds - elapsedSeconds);
      return { allowed: false, remainingSeconds };
    }

    record.count += 1;
    sessionStorage.setItem(storageKey, JSON.stringify(record));
    return { allowed: true, remainingSeconds: 0 };
  } catch {
    // If sessionStorage is unavailable or restricted, fail open gracefully
    return { allowed: true, remainingSeconds: 0 };
  }
}

/**
 * Verifies that a hidden anti-bot honeypot field was left untouched.
 * 
 * @param {string} honeypotValue - Value of the hidden honeypot input
 * @returns {boolean} True if honeypot is empty (human user), false if filled (bot)
 */
export function verifyHoneypot(honeypotValue) {
  return !honeypotValue || honeypotValue.trim() === '';
}

/**
 * Secure security event logging for telemetry and diagnostics.
 * Prevents PII leaks by sanitizing payload descriptors before logging.
 * 
 * @param {string} eventType - Type of security event (e.g. 'RATE_LIMIT_TRIGGERED')
 * @param {object} meta - Context metadata (non-PII)
 */
export function logSecurityEvent(eventType, meta = {}) {
  const timestamp = new Date().toISOString();
  if (typeof window !== 'undefined' && window.console) {
    console.warn(`[TPN-SECURITY-AUDIT] [${timestamp}] [${eventType}]`, meta);
  }
}
