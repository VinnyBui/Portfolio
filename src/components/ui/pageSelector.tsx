import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function PaginationSelector({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between gap-3">
        <PaginationItem>
          <Button
            variant="ghost"
            className="group aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ArrowLeft className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5" size={16} />
            Previous Project
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="ghost"
            className="group aria-disabled:pointer-events-none aria-disabled:opacity-50"
            aria-disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next Project
            <ArrowRight className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5" size={16} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
