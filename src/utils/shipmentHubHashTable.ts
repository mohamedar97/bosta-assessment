interface ShipmentHubInfo {
  description: { en: string; ar: string };
}

const shipmentHubHashTable = (hub: string): ShipmentHubInfo => {
  console.log(hub);

  switch (hub) {
    case "Cairo Sorting Facility":
      return {
        description: { en: "Cairo Sorting Facility", ar: "مركز فرز القاهرة" },
      };
    case "Mohandseen Hub":
      return {
        description: { en: "Mohandseen Hub", ar: "مركز المهندسين" },
      };
    case "Tanta Hub":
      return {
        description: { en: "Tanta Hub", ar: "مركز طنطا" },
      };
    case "Haram Hub":
      return {
        description: { en: "Haram Hub", ar: "مركز الهرم" },
      };
    case "Cairo Sorting Facility":
      return {
        description: { en: "Cairo Sorting Facility", ar: "مركز فرز القاهرة" },
      };
    case "Cairo Sorting Facility":
      return {
        description: { en: "Cairo Sorting Facility", ar: "مركز فرز القاهرة" },
      };
    case "FM & Reverse Hub":
      return {
        description: { en: hub, ar: "إدارة الشحن" },
      };
    default:
      return {
        description: { en: hub, ar: hub },
      };
  }
};

export default shipmentHubHashTable;
