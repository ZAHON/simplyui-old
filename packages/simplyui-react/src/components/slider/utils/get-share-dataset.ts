type GetShareDatasetArgs = {
  disabled?: boolean;
};

export function getShareDataset(args: GetShareDatasetArgs) {
  const { disabled } = args;

  return {
    'data-disabled': disabled ? '' : undefined,
  };
}
