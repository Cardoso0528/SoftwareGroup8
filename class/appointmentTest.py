from appointment import Appointment

# Create an appointment
appointment = Appointment()

# Update the service for the appointment
try:
    appointment.update_appointment_service(
        "Hair Perm",
        "A permanent wave, commonly called a perm or permanent, is a hairstyle consisting of waves or curls set into the hair.",
        "60.00"
    )
    print("Service updated successfully!")
    print("Service Details:", appointment.get_service_details())
except ValueError as e:
    print("Failed to update service:", e)