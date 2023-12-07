import React from "react";
import { Button } from "@/stories/Components";
import { FaArrowRight } from "react-icons/fa6";
import updateProps from "@/utils/update-props";
import { IconBaseProps } from "react-icons";
import cn from "@/utils/cn";

const FeatureText: React.FC<{
  textCentered?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "topLeft" | "topCenter" | "left";
  iconFeatured?: boolean;
}> = ({
  textCentered = false,
  iconPosition = "topLeft",
  icon,
  iconFeatured = false,
}) => {
  return (
    <div
      className={cn({
        "text-center": textCentered,
        "flex gap-4 items-start": iconPosition == "left",
      })}
    >
      {icon && (
        <div
          className={cn("inline-flex text-xl text-icon-fg-brand mb-3 xl:mb-4", {
            "justify-center": iconPosition == "topCenter",
            "pt-1": iconPosition == "left",
            "text-fg-secondary p-3 border rounded-lg border-featured-icon-modern-border shadow-xs":
              iconFeatured,
          })}
        >
          {updateProps<IconBaseProps>(icon, { size: "24" })}
        </div>
      )}
      <div>
        <h3 className="text-lg xl:text-xl font-semibold mb-3">
          Deliver instant answers
        </h3>
        <p className="text-tertiary text-md mb-5">
          An all-in-one customer service platform that helps you balance
          everything your customers need to be happy.
        </p>

        <Button
          size="lg"
          variant="link-color"
          rightIcon={<FaArrowRight />}
          className={cn({
            "pl-0": !textCentered,
          })}
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

FeatureText.displayName = "FeatureText";

export default FeatureText;