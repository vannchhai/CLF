@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="block-header">
            <h2>EDIT ADVERTISING</h2>
        </div>
        <div class="row clearfix">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="card">
                        <div class="header">
                            <div class="row clearfix">
                                <div class="col-xs-12 col-sm-6">
                                    <h2>EDIT ADVERTISING</h2>
                                </div>
                            </div>
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <form class="form-horizontal" action="{{ ($adsModel) ? url('/ads_update')  : url('/ads_insert')}}" method="POST">
                                {{ csrf_field() }}
                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">Slug</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input type="text" name="slug" value="{{ ($adsModel) ? $adsModel->slug : '' }}" class="form-control" placeholder="Name" required>
                                                <input type="hidden" name="id" value="{{ ($adsModel) ? $adsModel->id : '' }}" class="form-control" placeholder="Name" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">Provider Name</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input type="text" name="name" value="{{ ($adsModel) ? $adsModel->provider_name : '' }}" class="form-control" placeholder="Name" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">Tracking Code Large</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <textarea rows="5" name="tcl" class="form-control" placeholder="" required>{{ ($adsModel) ? $adsModel->tracking_code_large : '' }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                     <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">Tracking Code Medium</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <textarea rows="5" name="tcm" class="form-control" placeholder="">{{ ($adsModel) ? $adsModel->tracking_code_medium : '' }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                      <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">Tracking Code Small</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <textarea rows="5" name="tcs"class="form-control" placeholder="">{{ ($adsModel) ? $adsModel->tracking_code_small : '' }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-offset-2 col-md-offset-2 col-sm-offset-4 col-xs-offset-5">
                                            <input type="checkbox" id="remember_me_3" name="active" class="filled-in" checked>
                                            <label for="remember_me_3">Active</label>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-lg-offset-2 col-md-offset-2 col-sm-offset-4 col-xs-offset-5">
                                            <button type="submit" class="btn btn-primary m-t-15 waves-effect">SAVE</button>
                                            <a href="{{ url('/advertising')}}" class="btn btn-warning m-t-15 waves-effect">CANCEL</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
@endsection

@section('javascript')
    <script type="text/javascript" src="{{ asset('plugins/jquery-validation/jquery.validate.js')}}"></script>
@endsection