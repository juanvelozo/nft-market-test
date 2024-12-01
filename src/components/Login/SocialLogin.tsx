import Button from "../common/Button/Button";
import { AppleIcon } from "../icons/AppleIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { GoogleIcon } from "../icons/GoogleIcon";

export const SocialLogin = (): JSX.Element => {
  return (
    <div className="flex justify-around items-center gap-4">
      <Button variant="outline" iconStart={<GoogleIcon />}>
        Sign in with Google
      </Button>
      <Button variant="outline" iconStart={<AppleIcon />}>
        Sign in with Apple
      </Button>
      <Button variant="outline" iconStart={<FacebookIcon />}>
        Sign in with Facebook
      </Button>
    </div>
  );
};
