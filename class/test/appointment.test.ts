import {Appointment} from '../src/appointment';
import { describe, expect, test } from '@jest/globals';

describe('testing create Appointment', () => {
  const appointment = new Appointment();

  //Apply Appointment
  test('success', () => {
    expect(appointment.applyAppointment("john_doe","Hair Perm","2025-05-10T19:30:00Z","Joey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Applying appointment successfully");
  });
  test('error notes', () => {
    expect(appointment.applyAppointment("john_doe","Hair Perm","2025-05-10T19:30:00Z","Joey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name."
    )).toBe("Invalid notes input.");
  });
  test('error exceptional notes', () => {
    expect(appointment.applyAppointment("john_doe","Hair Perm","2025-05-10T19:30:00Z","Joey20","A // permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Invalid notes input.");
  });
  test('error stylist', () => {
    expect(appointment.applyAppointment("john_doe","Hair Perm","2025-05-10T19:30:00Z","john29","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Invalid stylist input.");
  });
  test('error exceptional stylist', () => {
    expect(appointment.applyAppointment("john_doe","Hair Perm","2025-05-10T19:30:00Z","Jo~ey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Invalid stylist input.");
  });
  test('error time', () => {
    expect(appointment.applyAppointment("john_doe","Hair Perm","May10thT19:30:00","Joey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Invalid time input.");
  });
  test('error exceptional time', () => {
    expect(appointment.applyAppointment("john_doe","Hair Perm","","Joey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Invalid time input.");
  });
  test('error service', () => {
    expect(appointment.applyAppointment("john_doe","Hair Cut","2025-05-10T19:30:00Z","Joey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Invalid service name input.");
  });
  test('error exceptional service', () => {
    expect(appointment.applyAppointment("john_doe","Hair Perm //","2025-05-10T19:30:00Z","Joey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Invalid service name input.");
  });
  test('error username', () => {
    expect(appointment.applyAppointment("john","Hair Perm","2025-05-10T19:30:00Z","Joey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Invalid username input.");
  });
  test('error exceptional username', () => {
    expect(appointment.applyAppointment("","Hair Perm","2025-05-10T19:30:00Z","Joey20","A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair. The curls may last a number of months, hence the name.")).toBe("Invalid username input.");
  });
  
});