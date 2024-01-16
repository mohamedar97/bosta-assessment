interface ShipmentStatusInfo {
  description: { en: string; ar: string };
}

const getShipmentStatusInfo = (status: string): ShipmentStatusInfo => {
  switch (status) {
    case "Customer is not answering.":
      return {
        description: { en: status, ar: "العميل لا يرد" },
      };
    case "Cancellation - the customer refuses to receive the shipment.":
      return {
        description: {
          en: "The customer refuses to receive the shipment",
          ar: "العميل رفض استلام الشحنة",
        },
      };

    case "":
      return {
        description: { en: "", ar: "" },
      };
    // Add more statuses as needed
    default:
      return {
        description: { en: status, ar: status },
      };
  }
};

export default getShipmentStatusInfo;
