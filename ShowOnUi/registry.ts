import { foundationalComponents } from './foundational';
import { formsComponents } from './forms';
import { cardsComponents } from './cardsComponents';
import { modalComponent } from './modalComponent';
import { responsiveSidebarComponents } from './responsiveSidebarComponents';

// Map categories to their component lists
export const getComponentsByCategory = (category: string) => {
    const registry: Record<string, any[]> = {
        "Foundational": [...foundationalComponents],
        "Forms": [...formsComponents],
        "Data Display": [...cardsComponents],
        "Overlay": [...modalComponent],
        "Navigation": [...responsiveSidebarComponents],
        // Placeholders
        "Feedback": [],
        "Auth & User": [],
        "E-commerce": [],
        "Charts": [],
        "Advanced": [],
        "Layout": [],
        "Utility": []
    };
    return registry[category] || [];
}
