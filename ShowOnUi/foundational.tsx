import { Badge } from "@/components/ui-component/Foundational/Badge/Badge";
import { Avatar } from "@/components/ui-component/Foundational/Avatar/Avatar";
import { CustomLink } from "@/components/ui-component/Foundational/Link/Link";
import { Image } from "@/components/ui-component/Foundational/Image/Image";
import { Logo } from "@/components/ui-component/Foundational/Logo/Logo";
import { Text } from "@/components/ui-component/Foundational/Text/Text";
import { Heading } from "@/components/ui-component/Foundational/Heading/Heading";
import { Divider } from "@/components/ui-component/Foundational/Divider/Divider";
import { Chip } from "@/components/ui-component/Foundational/Chip/Chip";
import { PrimaryButton } from "@/components/ui-component/Button/button";
import { primaryButtonCode } from '@/code/button-code'

const badgeCode = `<Badge variant="brand">New Feature</Badge>`
const avatarCode = `<Avatar src="..." />`
const linkCode = `<CustomLink href="#">Click me</CustomLink>`
const textCode = `<Text size="lg" weight="medium">Sample Text</Text>`
const headingCode = `<Heading level={2}>Section Title</Heading>`
const dividerCode = `<Divider />`
const chipCode = `<Chip label="React" variant="brand" />`

export const foundationalComponents = [
    {
        id: "primary-button",
        name: "Primary Button",
        preview: <PrimaryButton />,
        code: primaryButtonCode
    },
    {
        id: "text",
        name: "Text",
        preview: (
            <div className="space-y-2">
                <Text size="xl" weight="semibold">Larger Text</Text>
                <Text variant="muted">Muted description text.</Text>
            </div>
        ),
        code: textCode
    },
    {
        id: "heading",
        name: "Heading",
        preview: (
            <div className="space-y-4">
                <Heading level={2}>H2 Heading</Heading>
                <Heading level={4} className="text-neutral-500">H4 Subheading</Heading>
            </div>
        ),
        code: headingCode
    },
    {
        id: "divider",
        name: "Divider",
        preview: (
            <div className="w-full max-w-sm space-y-4 p-4 border rounded-lg">
                <Text>Content Above</Text>
                <Divider />
                <Text>Content Below</Text>
            </div>
        ),
        code: dividerCode
    },
    {
        id: "badge",
        name: "Badge",
        preview: (
            <div className="flex gap-2">
                <Badge variant="neutral">Neutral</Badge>
                <Badge variant="brand">Brand</Badge>
                <Badge variant="success">Success</Badge>
            </div>
        ),
        code: badgeCode
    },
    {
        id: "chip",
        name: "Chip",
        preview: (
            <div className="flex gap-2">
                <Chip label="React" variant="brand" />
                <Chip label="Next.js" />
                <Chip label="Deletable" />
            </div>
        ),
        code: chipCode
    },
    {
        id: "avatar",
        name: "Avatar",
        preview: (
            <div className="flex gap-4 items-center">
                <Avatar initials="JD" />
                <Avatar size="lg" initials="AB" className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300" />
            </div>
        ),
        code: avatarCode
    },
    {
        id: "link",
        name: "Link",
        preview: <CustomLink href="#">Example Link</CustomLink>,
        code: linkCode
    },
    {
        id: "image",
        name: "Image",
        preview: (
            <div className="w-full max-w-[200px]">
                <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&auto=format&fit=crop" alt="Demo" aspectRatio="video" />
            </div>
        ),
        code: `<Image src="..." aspectRatio="video" />`
    },
    {
        id: "logo",
        name: "Logo",
        preview: <Logo size="lg" />,
        code: `<Logo size="lg" />`
    }
]
