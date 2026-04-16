public class Main {

    public static void main(String[] args) {

        Client client = new Client(1,"Ali","0501234567");
        Master master = new Master(1,"Leyla","Hairdresser");
        Manager manager = new Manager("Nigar");

        client.makeAppointment();
        master.showInfo();
        manager.manageClients();

    }
}