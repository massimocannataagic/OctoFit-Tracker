import mongoose from 'mongoose';
import { Activity } from '../models/Activity';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Maya Chen',
        email: 'maya.chen@example.com',
        profile: 'Trail runner focused on endurance and mobility.',
      },
      {
        name: 'Jordan Rivera',
        email: 'jordan.rivera@example.com',
        profile: 'Cyclist tracking weekly distance and recovery.',
      },
      {
        name: 'Avery Brooks',
        email: 'avery.brooks@example.com',
        profile: 'Strength athlete building a consistent cardio habit.',
      },
      {
        name: 'Priya Patel',
        email: 'priya.patel@example.com',
        profile: 'Yoga instructor balancing flexibility and interval work.',
      },
    ]);

    await Team.insertMany([
      {
        name: 'OctoFit Trailblazers',
        members: [users[0]._id, users[1]._id],
      },
      {
        name: 'Cardio Core Crew',
        members: [users[2]._id, users[3]._id],
      },
    ]);

    await Activity.insertMany([
      {
        user: users[0]._id,
        type: 'Trail Run',
        durationMinutes: 52,
        caloriesBurned: 510,
        loggedAt: new Date('2026-09-07T06:30:00Z'),
      },
      {
        user: users[1]._id,
        type: 'Cycling',
        durationMinutes: 75,
        caloriesBurned: 640,
        loggedAt: new Date('2026-09-08T17:45:00Z'),
      },
      {
        user: users[2]._id,
        type: 'Strength Training',
        durationMinutes: 45,
        caloriesBurned: 360,
        loggedAt: new Date('2026-09-09T12:15:00Z'),
      },
      {
        user: users[3]._id,
        type: 'Power Yoga',
        durationMinutes: 40,
        caloriesBurned: 230,
        loggedAt: new Date('2026-09-09T19:00:00Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      { user: users[1]._id, points: 1840, rank: 1 },
      { user: users[0]._id, points: 1725, rank: 2 },
      { user: users[2]._id, points: 1390, rank: 3 },
      { user: users[3]._id, points: 1265, rank: 4 },
    ]);

    await Workout.insertMany([
      {
        title: 'Morning Mobility Primer',
        description: 'A low-impact routine for hips, shoulders, and core activation.',
        difficulty: 'beginner',
        durationMinutes: 20,
      },
      {
        title: 'Tempo Ride Builder',
        description: 'Structured indoor cycling intervals for aerobic power.',
        difficulty: 'intermediate',
        durationMinutes: 45,
      },
      {
        title: 'Full-Body Strength Circuit',
        description: 'Compound lifts and bodyweight finishers for balanced strength.',
        difficulty: 'advanced',
        durationMinutes: 55,
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
