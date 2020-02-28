import { Request,Response } from 'express';
import {getRepository} from 'typeorm';
import {User} from '../models/user.model';


export const SingUp = (req:Request , res: Response) => {
    if(!req.body.username || !req.body.password){
        return res.status(400).json({msg: 'Please. send your email and password'});
    };

    res.send('recivied');
};

export const SingIn = (req:Request , res: Response) => {
    res.send('singin');
};

export const getUsers = async (req:Request , res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
};