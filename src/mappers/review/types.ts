export type ReviewParamsType = {
  rating?: number;
  comment?: string;
  date?: string;
  reviewerName?: string;
  reviewerEmail?: string;
};

export type ReviewType = {
  rating: number;
  comment: string;
  date: Date | null;
  reviewerName: string;
  reviewerEmail: string;
};
