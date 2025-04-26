import {Service} from '../src/service';
import { describe, expect, test } from '@jest/globals';

describe('testing service file', () => {
  const service = new Service();
  test('success', () => {
    expect(service.addService("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")).toBe("Service added successfully");
  });

  test('wrong cost formatt', () => {
    expect(service.addService("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.","60/00")).toBe("Error: Invalid cost");
  });

  test('empty string should result in zero', () => {
    expect(service.addService("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",  "abcd")).toBe("Error: Invalid cost");
  });

  test('empty string should result in zero', () => {
    expect(service.addService("Hair Perm", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name. A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name. A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")).toBe("Error: Invalid description");
  });

  test('empty string should result in zero', () => {
    expect(service.addService("Hair Perm", "A \\ permanent wave, ~commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",  "60.00")).toBe("Error: Invalid description");
  });

  test('empty string should result in zero', () => {
    expect(service.addService("A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.","60.00")).toBe("Error: Invalid name");
  });

  test('empty string should result in zero', () => {
    expect(service.addService("", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")).toBe("Exceptional: No input");
  });
});