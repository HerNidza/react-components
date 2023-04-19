import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-2"
          onClick={handleClick}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick} className="mb-2">
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick} className="mb-2">
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline className="mb-2">
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded className="mb-2">
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
