import mongoose, { Model } from 'mongoose';
import { Note, INote } from './note';

export class NoteService {

  public async get(filter: object): Promise<Model<INote>[]> {
    return Note.find(filter);
  }

  public async getById(id: string): Promise<INote | null> {
    return Note.findById(id);
  }

  public async create(data: INote): Promise<INote> {
    try {
      return Note.create(data);
    } catch (error) {
      throw new Error('Erro ao criar nota');
    }
  }

  public async update(id: string, data: INote): Promise<INote | null> {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new Error('ID inválido');

    try {
      return Note.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error('Erro ao atualizar nota');
    }
  }

  public async delete(id: string): Promise<void> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('ID inválido');
    }

    try {
      await Note.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Erro ao excluir nota');
    }
  }
}
