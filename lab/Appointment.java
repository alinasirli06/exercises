public class Appointment {

    String date;
    String time;

    public Appointment(String date, String time) {
        this.date = date;
        this.time = time;
    }

    public void showAppointment() {
        System.out.println("Appointment: " + date + " " + time);
    }
}