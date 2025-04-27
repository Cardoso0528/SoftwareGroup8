import {Service} from '../src/service';
import { describe, expect, test } from '@jest/globals';

describe('testing service file', () => {
  const service = new Service();

  //Add service
  test('success', () => {
    expect(service.addService("Hair Perm", "60", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")).toBe("Service added successfully");
  });

  test('wrong cost format', () => {
    expect(service.addService("Hair Perm", "60", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.","60/00")).toBe("Error: Invalid cost");
  });

  test('exceptional cost', () => {
    expect(service.addService("Hair Perm", "60", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",  "abcd")).toBe("Error: Invalid cost");
  });

  test('wrong description format', () => {
    expect(service.addService("Hair Perm", "60", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name. A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name. A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")).toBe("Error: Invalid description");
  });

  test('exceptional description', () => {
    expect(service.addService("Hair Perm", "60", "A \\ permanent wave, ~commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.",  "60.00")).toBe("Error: Invalid description");
  });

  test('wrong name format', () => {
    expect(service.addService("A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.","60.00")).toBe("Error: Invalid name");
  });

  test('exceptional name', () => {
    expect(service.addService("", "60", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")).toBe("Exceptional: No input");
  });

  test('wrong duration format', () => {
    expect(service.addService("Hair perm", "abs", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")).toBe("Error: Invalid duration");
  });

  test('exceptional duration', () => {
    expect(service.addService("Hair perm", "", "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.", "60.00")).toBe("Exceptional: No input");
  });

});