import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUrlDto } from './dto/create-url.dto';
import { GetUrlParamDto } from './dto/get-url.dto';
import { Url } from './entities/url.entity';

@Injectable()
export class UrlService {
  constructor(
    @InjectModel(Url.name)
    private readonly urlModel: Model<Url>,
  ) {}

  create(createUrl: CreateUrlDto) {
    const url = new this.urlModel(createUrl);
    return url.save();
  }

  async findOne(shortUrlParams: GetUrlParamDto) {
    const url = await this.urlModel
      .findOne({ shortUrl: shortUrlParams.shortUrl })
      .exec();
    if (!url) {
      throw new NotFoundException('Url Refrence not found');
    }
    return url;
  }
}
