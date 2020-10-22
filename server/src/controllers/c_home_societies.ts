import { Request, Response } from "express";
import { getRepository } from "typeorm";
import HomeSociety from "../models/HomeSociety";
import HomeSocietyView from "../views/v_home_societies";

// import Yup from 'yup';

export default {
  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const homeSocietiesRepository = getRepository(HomeSociety);

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === "true",
      images,
    };

    // const schema = Yup.object().shape({
    //   name: Yup.string().required(),
    //   latitude:Yup.number().required(),
    //   longitude:Yup.number().required(),
    //   about: Yup.string().required().max(300),
    //   instructions:Yup.string().required(),
    //   opening_hours:Yup.string().required(),
    //   open_on_weekends:Yup.boolean().required(),
    //   images: Yup.object().shape({
    //     path:Yup.string().required()
    //   }),
    // });

    // await schema.validate(data, {
    //   abortEarly: false
    // });

    const homeSociety = homeSocietiesRepository.create(data);

    await homeSocietiesRepository.save(homeSociety);
    return res.status(201).json({
      message: "Created Home Society successfully",
      homeSociety: homeSociety,
    });
  },

  async index(req: Request, res: Response) {
    const homeSocietiesRepository = getRepository(HomeSociety);
    const homeSocieties = await homeSocietiesRepository.find({
      relations: ["images"],
    });
    return res.json(HomeSocietyView.renderMany(homeSocieties));
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const homeSocietiesRepository = getRepository(HomeSociety);
    const homeSociety = await homeSocietiesRepository.findOneOrFail(id, {
      relations: ["images"],
    });
    return res.json(HomeSocietyView.render(homeSociety));
  },
};
