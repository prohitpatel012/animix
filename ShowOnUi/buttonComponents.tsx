// app/data/buttons.tsx

import { AnimatedButton, PrimaryButton, SecondaryButton } from "@/components/ui-component/Button/button";
import { animatedButtonCode, primaryButtonCode, secondaryButtonCode } from '@/code/button-code'



export const buttonComponents = [
  {
    id: "primary-button",
    name: "Primary Button",
    preview: <PrimaryButton />,
    code: primaryButtonCode
  },
  {
    id: "animatedButton",
    name: "Primary Button",
    preview: <AnimatedButton />,
    code: animatedButtonCode
  },
  {
    id: "secondary-button",
    name: "Secondary Button",
    preview: <SecondaryButton />,
    code: secondaryButtonCode
  }
]
