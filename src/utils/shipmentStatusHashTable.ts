interface ShipmentStatusInfo {
  shortDescription: { en: string; ar: string };
  description: { en: string; ar: string };

  value: number;
  color?: string;
}

const shipmentStatusTable: Record<string, ShipmentStatusInfo> = {
  TICKET_CREATED: {
    shortDescription: { en: "Shipment created", ar: "تم إنشاء الشحنة" },
    description: { en: "Shipment created", ar: "تم إنشاء الشحنة" },
    value: 1,
  },
  PACKAGE_RECEIVED: {
    shortDescription: {
      en: "Shipment received from vendor",
      ar: "تم استلام الشحنة من التاجر",
    },
    description: {
      en: "Shipment received in warehouse",
      ar: "تم استلام الشحنة في المستودع",
    },
    value: 2,
  },
  IN_TRANSIT: {
    shortDescription: {
      en: "Shipment received from vendor",
      ar: "تم استلام الشحنة من التاجر",
    },
    description: {
      en: "Shipment moving to warehouse",
      ar: "الشحنة في طريقها إلى المستودع",
    },
    value: 2,
  },
  NOT_YET_SHIPPED: {
    shortDescription: {
      en: "Shipment received from vendor",
      ar: "تم استلام الشحنة من التاجر",
    },
    description: {
      en: "Awaiting shipment from vendor ",
      ar: "في انتظار الشحن من التاجر",
    },
    value: 2,
  },
  WAITING_FOR_CUSTOMER_ACTION: {
    shortDescription: {
      en: "Shipment our for delivery",
      ar: "الشحنة خرجت للتسليم",
    },
    description: { en: "Shipment our for delivery", ar: "الشحنة خرجت للتسليم" },
    value: 2,
  },
  OUT_FOR_DELIVERY: {
    shortDescription: {
      en: "Shipment our for delivery",
      ar: "الشحنة خرجت للتسليم",
    },
    description: { en: "Shipment our for delivery", ar: "الشحنة خرجت للتسليم" },
    value: 3,
  },
  CANCELLED: {
    shortDescription: {
      en: "Shipment cancelled",
      ar: "تم إلغاء الشحنة",
    },
    description: { en: "Shipment created", ar: "تم إنشاء الشحنة" },
    value: 2,
    color: "#e30613",
  },
  DELIVERED_TO_SENDER: {
    shortDescription: {
      en: "Shipment cancelled",
      ar: "تم إلغاء الشحنة",
    },
    description: {
      en: "Shipment refunded to sender",
      ar: "تم إرجاع الشحنة للمرسل",
    },
    value: 2,
    color: "#e30613",
  },
  DELIVERED: {
    shortDescription: { en: "Shipment delivered", ar: "تم التسليم" },
    description: { en: "Shipment delivered", ar: "تم التسليم" },
    value: 4,
    color: "green",
  },
  // Add more statuses as needed
};
export default shipmentStatusTable;
