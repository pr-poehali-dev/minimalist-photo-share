
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
        <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск контактов..."
          className="pl-9"
        />
      </div>
    </div>
  );
};

export default ContactSearch;
