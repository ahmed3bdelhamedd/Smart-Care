package com.smartcare.microservices;

import java.util.HashMap;
import java.util.Map;

public class PatientRoutingService {

    private Map<String, Integer> icuBedAvailability = new HashMap<>();

    public PatientRoutingService() {
        // تهيئة أسرة العناية المركزة المتاحة في المستشفيات المرتبطة
        icuBedAvailability.put("المستشفى الرئيسي - فرع الدقي", 4);
        icuBedAvailability.put("مستشفى التجمع الذكي", 12);
        icuBedAvailability.put("مجمع العيد الإقليمي", 0);
    }

    public String routeCriticalPatient(String patientId, boolean isEmergency) {
        if (!isEmergency) {
            return "[Java Microservices] Patient routed to standard outpatient queue.";
        }

        String bestHospital = null;
        int maxBeds = -1;

        for (Map.Entry<String, Integer> entry : icuBedAvailability.entrySet()) {
            if (entry.getValue() > maxBeds) {
                maxBeds = entry.getValue();
                bestHospital = entry.getKey();
            }
        }

        if (maxBeds > 0) {
            return "[Java Microservices] CRITICAL ALERT: Patient " + patientId + 
                   " successfully routed to " + bestHospital + " (" + maxBeds + " ICU beds available).";
        } else {
            return "[Java Microservices] WARNING: All local ICU beds full. Activating regional emergency fallback grid.";
        }
    }

    public static void main(String[] args) {
        PatientRoutingService service = new PatientRoutingService();
        String result = service.routeCriticalPatient("PAT-9921", true);
        System.out.println(result);
    }
}
