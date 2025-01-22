import { getFileContent } from "@/lib/file";
import { Copy, Info } from "lucide-react";
import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";
import { CopyToClipboardButton } from "./copy-to-clipboard-button";
import { CodeDialog } from "./customized/code-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface BlockProps {
  title: string;
  children?: ReactNode;
  name: string;
  credit?: {
    label: string;
    link: string;
  };
  description?: ReactNode;
  type: string;
}

const ComponentBlock: FC<BlockProps> = async ({
  title,
  type,
  description,
  name,
  credit,
}) => {
  const src = `src/components/customized/${type}/${name}.tsx`;
  const code = await getFileContent(src);

  // Dynamically import the component from its path
  const DynamicComponent = dynamic(() =>
    import(`@/components/customized/${type}/${name}.tsx`).catch(
      () => BlockNotFound
    )
  );

  return (
    <div className="bg-background rounded-md px-3 flex flex-col">
      <div className="h-10 flex items-center justify-between pl-1 border-b border-muted">
        <div className="flex items-center gap-2">
          <span className="text-[15px] tracking-tight font-bold">{title}</span>
          {credit && (
            <a
              href={credit.link}
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs hover:underline hover:text-foreground text-muted-foreground"
            >
              (Credits to {credit?.label})
            </a>
          )}
          {description ? (
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          ) : null}
        </div>
        <div className="flex items-center">
          <CopyToClipboardButton
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-muted-foreground"
            content={code}
          >
            <Copy />
          </CopyToClipboardButton>
          <CodeDialog code={code} />
        </div>
      </div>
      <div className="flex-1 min-h-32 px-1 py-5 w-full rounded flex items-center justify-center">
        <DynamicComponent />
      </div>
    </div>
  );
};

const BlockNotFound = () => <p>Block not found</p>;

export default ComponentBlock;