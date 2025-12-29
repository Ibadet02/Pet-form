const StepOrders = {
  ownerInfo: 1,
  petInfo: 2,
  healthInfo: 3,
} as const;

export const numberOfSteps = Object.keys(StepOrders).length;

export default StepOrders;
