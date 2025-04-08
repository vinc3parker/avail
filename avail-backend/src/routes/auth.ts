import { Router, Request, Response } from 'express';
import { AppDataSource } from '../config/data-source';
import { User } from '../entities/User';
import bcrypt from 'bcrypt';

const router = Router();
const userRepository = AppDataSource.getRepository(User);

router.post('/signup', async (req: Request, res: Response): Promise<any> => {
  const { fullName, email, username, password } = req.body;

  try {
    const existing = await userRepository.findOneBy({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    await userRepository.save(newUser);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;