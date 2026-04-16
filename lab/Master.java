public class Master {

    int id;
    String name;
    String specialization;

    public Master(int id, String name, String specialization) {
        this.id = id;
        this.name = name;
        this.specialization = specialization;
    }

    public void showInfo() {
        System.out.println(name + " - " + specialization);
    }
}