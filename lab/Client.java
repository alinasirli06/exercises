public class Client {

    private int id;
    private String name;
    private String phone;

    public Client(int id, String name, String phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }

    public void makeAppointment() {
        System.out.println("Appointment created for " + name);
    }

    public void cancelAppointment() {
        System.out.println("Appointment cancelled");
    }

}