interface ShipmentStatusInfo {
  shortDescription: { en: string; ar: string };
  description: { en: string; ar: string };
  value: number;
  color?: string;
}

const getShipmentStatusInfo = (status: string): ShipmentStatusInfo => {
  switch (status) {
    case "TICKET_CREATED":
      return {
        shortDescription: { en: "Shipment created", ar: "تم إنشاء الشحنة" },
        description: { en: "Shipment created", ar: "تم إنشاء الشحنة" },
        value: 1,
      };
    case "PACKAGE_RECEIVED":
      return {
        shortDescription: {
          en: "Shipment received from vendor",
          ar: "تم استلام الشحنة من التاجر",
        },
        description: {
          en: "Shipment received in warehouse",
          ar: "تم استلام الشحنة في المستودع",
        },
        value: 2,
      };
    case "IN_TRANSIT":
      return {
        shortDescription: {
          en: "Shipment received from vendor",
          ar: "تم استلام الشحنة من التاجر",
        },
        description: {
          en: "Shipment moving to warehouse",
          ar: "الشحنة في طريقها إلى المستودع",
        },
        value: 2,
      };
    case "NOT_YET_SHIPPED":
      return {
        shortDescription: {
          en: "Shipment received from vendor",
          ar: "تم استلام الشحنة من التاجر",
        },
        description: {
          en: "Awaiting shipment from vendor ",
          ar: "في انتظار الشحن من التاجر",
        },
        value: 2,
      };
    case "WAITING_FOR_CUSTOMER_ACTION":
      return {
        shortDescription: {
          en: "Shipment out for delivery",
          ar: "الشحنة خرجت للتسليم",
        },
        description: {
          en: "Shipment out for delivery",
          ar: "الشحنة خرجت للتسليم",
        },
        value: 2,
        color: "#e30613",
      };
    case "OUT_FOR_DELIVERY":
      return {
        shortDescription: {
          en: "Shipment out for delivery",
          ar: "الشحنة خرجت للتسليم",
        },
        description: {
          en: "Shipment out for delivery",
          ar: "الشحنة خرجت للتسليم",
        },
        value: 3,
      };
    case "CANCELLED":
      return {
        shortDescription: {
          en: "Shipment cancelled",
          ar: "تم إلغاء الشحنة",
        },
        description: { en: "Shipment cancelled", ar: "تم إلغاء الشحنة" },
        value: 2,
        color: "#e30613",
      };
    case "DELIVERED_TO_SENDER":
      return {
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
      };
    case "DELIVERED":
      return {
        shortDescription: { en: "Shipment delivered", ar: "تم التسليم" },
        description: { en: "Shipment delivered", ar: "تم التسليم" },
        value: 4,
        color: "green",
      };
    case "":
      return {
        shortDescription: { en: "", ar: "" },
        description: { en: "", ar: "" },
        value: 0,
        color: "#ccc",
      };
    // Add more statuses as needed
    default:
      return {
        shortDescription: { en: "Shipment processing", ar: "تجهيز الشحنة" },
        description: { en: "Shipment processing", ar: "تجهيز الشحنة" },
        value: 1,
        color: "#e30613",
      };
  }
};

export default getShipmentStatusInfo;
