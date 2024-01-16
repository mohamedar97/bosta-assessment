interface ShipmentStatusInfo {
  description: { en: string; ar: string };
}

const getShipmentStatusInfo = (status: string): ShipmentStatusInfo => {
  switch (status) {
    case "Customer is not answering.":
      return {
        description: { en: "Customer is not answering.", ar: "العميل لا يرد" },
      };
    case "Cancellation - the customer refuses to receive the shipment.":
      return {
        description: {
          en: "The customer refuses to receive the shipment",
          ar: "العميل رفض استلام الشحنة",
        },
      };
    case "Postponed - the customer requested postponement for another day.":
      return {
        description: {
          en: "The customer postponed the delivery",
          ar: "العميل طلب تأجيل التوصيل",
        },
      };
    case "Waiting for data modification - address not clear":
      return {
        description: {
          en: "Address not clear",
          ar: "العنوان غير واضح",
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
