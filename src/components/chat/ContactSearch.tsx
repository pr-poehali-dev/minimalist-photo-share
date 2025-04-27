
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ContactSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ContactSearch = ({ searchQuery, setSearchQuery }: ContactSearchProps) => {
  return (
    <div className="p-3 border-b">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Поиск контактов..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ContactSearch;
