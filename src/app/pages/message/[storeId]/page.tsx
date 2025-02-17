import type { Metadata } from "next";
import { MessageDetailPage } from "@/page/message/MessageDetailPage";

export const metadata: Metadata = {
  title: "メッセージページ",
  description: "メッセージページ",
};

type Props = {
  params: Promise<{
    storeId: string;
  }>;
};

export default async function Message({ params }: Props) {
  const { storeId } = await params;
  return <MessageDetailPage storeId={storeId} />;
}
