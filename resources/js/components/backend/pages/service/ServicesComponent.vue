<template>
    <div>
           <breadcrumb active_name="Services"></breadcrumb>
           <div class="row">
                    <div class="col-lg-12">
                               <div class="card">
                                   <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <h5 class="card-title">Services List <span class="text-muted fw-normal ms-2">({{services.length}})</span></h5>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                                                    <div>
                                                        <a role="button" class="btn btn-light" @click="openModal()"><i class="bx bx-plus me-1"></i> Add Service</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end row -->
                                        <div class="table-responsive mb-4">
                                        <table id="datatable-buttons" class="table table-bordered dt-responsive nowrap w-100">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                            </tr>
                                            <tr>
                                                <td>Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                                <td>San Francisco</td>
                                                <td>66</td>
                                                <td>2009/01/12</td>
                                                <td>$86,000</td>
                                            </tr>
                                            <tr>
                                                <td>Cedric Kelly</td>
                                                <td>Senior Javascript Developer</td>
                                                <td>Edinburgh</td>
                                                <td>22</td>
                                                <td>2012/03/29</td>
                                                <td>$433,060</td>
                                            </tr>                                      
                                            </tbody>
                                          </table>
                                        </div>
                                        <!-- end table responsive -->
                                   </div>
                               </div>
                     </div>
            </div>
        <div class="modal fade bs-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myLargeModalLabel">Create New Service</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <ServiceForm ></ServiceForm>
                        </div>
                    </div>
                    <!-- /.modal-content -->
            </div>
   <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
    </div> <!--end-->
</template>

<script>
import breadcrumb from '../../components/breadcrumbComponent';
import ServiceForm from "./ServiceFormComponent.vue";
export default {
        components:{breadcrumb,ServiceForm},
        data(){
            return{
                services:[],
            };
        },
        methods:{

            openModal(){
                $('.bs-modal-lg').modal('show')
            },
        },
        mounted(){
              
        }
    }
</script>

<style scoped>

</style>
