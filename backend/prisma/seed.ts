import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const facility = await prisma.facility.create({
    data: {
      name: 'Main Hospital',
      location: 'Downtown',
    },
  });

  const building = await prisma.building.create({
    data: {
      name: 'Emergency',
      facility: {
        connect: { id: facility.id },
      },
    },
  });

  const floor = await prisma.floor.create({
    data: {
      number: 1,
      building: {
        connect: { id: building.id },
      },
    },
  });

  const department = await prisma.department.create({
    data: {
      name: 'ER',
      floor: {
        connect: { id: floor.id },
      },
    },
  });

  const room = await prisma.room.create({
    data: {
      name: 'ER-101',
      department: {
        connect: { id: department.id },
      },
    },
  });

  const category = await prisma.assetCategory.create({
    data: {
      name: 'Generator',
      description: 'Backup power systems',
    },
  });

  const criticality = await prisma.criticalityLevel.create({
    data: {
      name: 'High',
      code: 'HIGH',
      description: 'Requires immediate attention when failed',
    },
  });

  await prisma.asset.create({
    data: {
      code: 'AC-ER-101-G-01',
      name: 'Emergency Room Generator',
      manufacturer: 'PowerGen',
      model: 'PG-5000',
      serialNumber: 'PG5000-ER101',
      purchaseDate: new Date('2020-01-15'),
      installationDate: new Date('2020-02-01'),
      warrantyExpiresAt: new Date('2025-02-01'),
      purchaseCost: 15000,
      specifications: {
        capacityKW: 500,
        fuelType: 'Diesel',
      },
      facility: { connect: { id: facility.id } },
      building: { connect: { id: building.id } },
      floor: { connect: { id: floor.id } },
      department: { connect: { id: department.id } },
      room: { connect: { id: room.id } },
      category: { connect: { id: category.id } },
      criticality: { connect: { id: criticality.id } },
    },
  });
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
