public class Manager {

    String name;

    public Manager(String name) {
        this.name = name;
    }

    public void manageClients() {
        System.out.println("Manager works with clients");
    }

    public void manageMasters() {
        System.out.println("Manager manages masters");
    }
}