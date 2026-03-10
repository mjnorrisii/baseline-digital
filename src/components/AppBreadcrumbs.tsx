import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FC } from "react";

interface BreadcrumbPath {
    name: string;
    path?: string;
}

interface AppBreadcrumbsProps {
    items: BreadcrumbPath[];
}

const AppBreadcrumbs: FC<AppBreadcrumbsProps> = ({ items }) => {
    return (
        <div className="container mb-8">
            <Breadcrumb>
                <BreadcrumbList>
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-1.5 sm:gap-2.5">
                            <BreadcrumbItem>
                                {item.path ? (
                                    <BreadcrumbLink asChild>
                                        <Link to={item.path} className="font-medium hover:text-primary transition-colors">
                                            {item.name}
                                        </Link>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage className="font-bold text-foreground">{item.name}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {index < items.length - 1 && <BreadcrumbSeparator className="text-muted-foreground/50" />}
                        </div>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default AppBreadcrumbs;
