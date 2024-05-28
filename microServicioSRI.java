
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;

@RestController
public class SRIController {

    @GetMapping("/microservicio1")
    public Map<String, Boolean> verificarContribuyente(@RequestParam String cedula) {
        String url = "https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/ConsolidadoContribuyente/existePorNumeroRuc?numeroRuc=" + cedula;
        RestTemplate restTemplate = new RestTemplate();
        Boolean existe = restTemplate.getForObject(url, Boolean.class);
        Map<String, Boolean> response = new HashMap<>();
        response.put("existe", existe);
        return response;
    }
}
