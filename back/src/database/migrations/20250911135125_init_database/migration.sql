-- CreateTable
CREATE TABLE "public"."Shop" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Flower" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "shopId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Flower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Order" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrderedFlower" (
    "id" UUID NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "orderId" UUID NOT NULL,
    "flowerId" UUID NOT NULL,

    CONSTRAINT "OrderedFlower_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Flower" ADD CONSTRAINT "Flower_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "public"."Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderedFlower" ADD CONSTRAINT "OrderedFlower_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderedFlower" ADD CONSTRAINT "OrderedFlower_flowerId_fkey" FOREIGN KEY ("flowerId") REFERENCES "public"."Flower"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
