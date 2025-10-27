// a simple in-memory cache to simulate waiting for validation results
const pendingValidations = new Map<
  number,
  (valid: boolean, missing: any[]) => void
>();

export function waitForValidation(
  orderId: number
): Promise<{ valid: boolean; missing: any[] }> {
  return new Promise((resolve) => {
    pendingValidations.set(orderId, (valid, missing) =>
      resolve({ valid, missing })
    );
  });
}

export async function processValidationResponse(message: any) {
  const { orderId, valid, missing } = message;

  const resolver = pendingValidations.get(orderId);
  if (resolver) {
    resolver(valid, missing);
    pendingValidations.delete(orderId);
  }
}
