import { Input } from "@/components/ui-component/Forms/Input/Input";
import { Textarea } from "@/components/ui-component/Forms/Textarea/Textarea";
import { Checkbox } from "@/components/ui-component/Forms/Checkbox/Checkbox";
import { Switch } from "@/components/ui-component/Forms/Switch/Switch";

const inputCode = `<Input label="Email" placeholder="example@email.com" />`
const textareaCode = `<Textarea label="Message" rows={4} />`
const checkboxCode = `<Checkbox label="Accept terms" />`
const switchCode = `<Switch label="Airplane Mode" />`

export const formsComponents = [
    {
        id: "input",
        name: "Input",
        preview: (
            <div className="w-full max-w-sm">
                <Input label="Email" placeholder="example@email.com" />
            </div>
        ),
        code: inputCode
    },
    {
        id: "textarea",
        name: "Textarea",
        preview: (
            <div className="w-full max-w-sm">
                <Textarea label="Message" placeholder="Type your message..." />
            </div>
        ),
        code: textareaCode
    },
    {
        id: "checkbox",
        name: "Checkbox",
        preview: <Checkbox label="Accept terms and conditions" />,
        code: checkboxCode
    },
    {
        id: "switch",
        name: "Switch",
        preview: <Switch label="Airplane Mode" />,
        code: switchCode
    }
]
