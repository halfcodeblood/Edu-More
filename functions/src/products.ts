export interface ProductData {
  productId: string;
  type: "SUBSCRIPTION" | "NON_SUBSCRIPTION";
}

export const productDataMap: { [productId: string]: ProductData } = {
  "purchase_course": {
    productId: "purchase_course",
    type: "NON_SUBSCRIPTION",
  },
  "course_update": {
    productId: "course_update",
    type: "NON_SUBSCRIPTION",
  },
  "subscription_course_id": {
    productId: "subscription_course_id",
    type: "SUBSCRIPTION",
  },
};
