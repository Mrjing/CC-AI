import { Logger } from '@nestjs/common';
import * as crypto from 'crypto';

const encryptionKey = 'bf3c116f2470cb4che9071240917c171';
const initializationVector = '518363fh72eec1v4';
const algorithm = 'aes-256-cbc';

export function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(algorithm, encryptionKey, initializationVector);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

export function decrypt(text: string): string {
  try {
    const decipher = crypto.createDecipheriv(algorithm, encryptionKey, initializationVector);
    let decrypted = decipher.update(text, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    process.exit(1);
  }
}

export function flatMapByKey<T>(arr: T[], key: keyof T) {
  const result = {} as Record<string, T[]>;
  for (const item of arr) {
    const value = item[key] as string;
    if (result[value]) {
      result[value].push(item);
    } else {
      result[value] = [item];
    }
  }
  return result;
}
