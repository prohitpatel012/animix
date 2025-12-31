// app/data/buttons.tsx

import { PrimaryButton, SecondaryButton } from "@/components/ui-component/button";
import { primaryButtonCode, secondaryButtonCode } from '@/code/button-code'



export const buttonComponents = [
  {
    id: "primary-button",
    name: "Primary Button",
    preview: <PrimaryButton />,
    code: primaryButtonCode
  },
  {
    id: "secondary-button",
    name: "Secondary Button",
    preview: <SecondaryButton />,
    code: secondaryButtonCode
  }
]
