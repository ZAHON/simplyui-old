type GetInitialStateArgs = {
  checked: boolean | undefined;
  defaultChecked: boolean | undefined;
};

export function getInitialState(args: GetInitialStateArgs) {
  const { checked, defaultChecked } = args;

  return checked ? checked : defaultChecked ? defaultChecked : false;
}
