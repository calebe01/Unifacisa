package Aula_03.Atividade_Fixacao;
import org.w3c.dom.*;
import javax.xml.parsers.*;
import java.io.*;

public class PassageiroXMLParser {

    public static void main(String[] args) {
        try {
            File inputFile = new File("passageiros.xml");
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(inputFile);
            doc.getDocumentElement().normalize();

            NodeList passageiroList = doc.getElementsByTagName("passageiro");
            int totalPassageiros = passageiroList.getLength();
            
            System.out.println("Total de passageiros: " + totalPassageiros);
            System.out.println("Origens e destinos:");

            for (int temp = 0; temp < totalPassageiros; temp++) {
                Node passageiroNode = passageiroList.item(temp);
                if (passageiroNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element passageiroElement = (Element) passageiroNode;
                    String origem = passageiroElement.getElementsByTagName("origem").item(0).getTextContent();
                    String destino = passageiroElement.getElementsByTagName("destino").item(0).getTextContent();
                    System.out.println("Passageiro " + (temp + 1) + ": Origem - " + origem + ", Destino - " + destino);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
