/*
 * Factura.java
 * Programa de ejemplo proporcionado por el profesor (Práctica 2 · Tema 2).
 * NO tienes que modificarlo: solo compilarlo, empaquetarlo en un .jar y ejecutarlo.
 */
public class Factura {

    static final double IVA = 0.21;

    public static void main(String[] args) {
        String[] conceptos = {"Dominio web anual", "Alojamiento web", "Logotipo corporativo"};
        double[] precios   = {12.00, 59.90, 150.00};

        System.out.println("=== FACTURA generada con Java " + System.getProperty("java.version") + " ===");
        double base = 0;
        for (int i = 0; i < conceptos.length; i++) {
            System.out.printf("%-25s %10.2f EUR%n", conceptos[i], precios[i]);
            base += precios[i];
        }
        double cuotaIva = base * IVA;
        System.out.println("-----------------------------------------");
        System.out.printf("%-25s %10.2f EUR%n", "Base imponible", base);
        System.out.printf("%-25s %10.2f EUR%n", "IVA (21 %)", cuotaIva);
        System.out.printf("%-25s %10.2f EUR%n", "TOTAL", base + cuotaIva);
    }
}
