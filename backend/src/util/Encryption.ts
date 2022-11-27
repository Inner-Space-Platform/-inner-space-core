import { pbkdf2Sync } from 'crypto';

/**
 * Hashes a password using PBKDF2.
 *
 * @param password The password to hash
 */
export function hashPassword(password: string): string {
  const salt: string = process.env.PASSWORD_SALT || 'salt';
  return pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
}

/**
 * Checks if the password is correct
 *
 * @param hash The hash of the password
 * @param password The password to check
 */
export function checkPassword(hash: string, password: string): boolean {
  return hashPassword(password) === hash;
}
