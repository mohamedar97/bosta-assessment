interface ShipmentStatusInfo {
  description: { en: string; ar: string };
  value: number;
  color?: string;
}

const shipmentStatusTable: Record<string, ShipmentStatusInfo> = {
  TICKET_CREATED: {
    description: { en: "Shipment created", ar: "تم إنشاء الشحنة" },
    value: 1,
  },
  PACKAGE_RECEIVED: {
    description: {
      en: "Shipment received from vendor",
      ar: "تم استلام الشحنة من التاجر",
    },
    value: 2,
  },
  IN_TRANSIT: {
    description: {
      en: "Shipment received from vendor",
      ar: "تم استلام الشحنة من التاجر",
    },
    value: 2,
  },
  NOT_YET_SHIPPED: {
    description: {
      en: "Shipment received from vendor",
      ar: "تم استلام الشحنة من التاجر",
    },
    value: 2,
  },
  WAITING_FOR_CUSTOMER_ACTION: {
    description: {
      en: "Shipment our for delivery",
      ar: "الشحنة خرجت للتسليم",
    },
    value: 2,
  },
  OUT_FOR_DELIVERY: {
    description: {
      en: "Shipment our for delivery",
      ar: "الشحنة خرجت للتسليم",
    },
    value: 3,
  },
  CANCELLED: {
    description: {
      en: "Shipment cancelled",
      ar: "تم إلغاء الشحنة",
    },
    value: 2,
    color: "#e30613",
  },
  DELIVERED_TO_SENDER: {
    description: {
      en: "Shipment cancelled",
      ar: "تم إلغاء الشحنة",
    },
    value: 2,
    color: "#e30613",
  },
  DELIVERED: {
    description: { en: "Shipment delivered", ar: "تم التسليم" },
    value: 4,
    color: "green",
  },
  // Add more statuses as needed
};
export default shipmentStatusTable;
// // Example usage
// const currentStatus = "inTransit";
// const statusInfo = shipmentStatusTable[currentStatus];

// if (statusInfo) {
//   console.log(`Status: ${currentStatus}`);
//   console.log(`English Description: ${statusInfo.description.en}`);
//   console.log(`Arabic Description: ${statusInfo.description.ar}`);
//   statusInfo.action(); // Perform the associated action
// } else {
//   console.log("Invalid shipment status");
// }
