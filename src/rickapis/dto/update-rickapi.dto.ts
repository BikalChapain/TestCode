import { PartialType } from '@nestjs/mapped-types';
import { CreateRickapiDto } from './create-rickapi.dto';

export class UpdateRickapiDto extends PartialType(CreateRickapiDto) {}
